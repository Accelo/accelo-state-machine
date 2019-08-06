// import { AlSubscriptionManager } from 'accelo/utility/subscription-manager/subscription-manager.class.js';

interface StateDetails<StateEnum, TransitionFactors> {
	stateName: StateEnum;
	transitionChecks(TransitionFactors): StateEnum;
}

type AnyKeyword = 'any';

export class AcceloStateMachine<
	StateEnum,
	TransitionFactors,
	States extends StateDetails<StateEnum, TransitionFactors>
> {
	currentState: States;
	states: States[];
	subscriptionManager;
	uniq: string;
	setup(states: States[], initState: StateEnum, transitions: TransitionObject<StateEnum | AnyKeyword>[]) {
		this.states = states;
		this.subscriptionManager = new AlSubscriptionManager();
		this.currentState = this.states.find(({ stateName }) => initState === stateName);
		this.uniq = $AL.md5(
			states.reduce((acc, transition) => {
				return acc + transition.stateName;
			}, '')
		);
		transitions.forEach(({ enterState, fromState, callback }) => {
			const key = fromState ? `${fromState}-${this.uniq}-${enterState}` : `${enterState}-${this.uniq}`;
			this.subscriptionManager.subscribe({
				key,
				callback,
			});
		});
	}

	updateStateMachine = (transitionFactors: TransitionFactors) => {
		const newStateName = this.currentState.transitionChecks(transitionFactors);
		const oldStateName = this.currentState.stateName;
		const didStateChange = newStateName && newStateName !== oldStateName;
		if (!didStateChange) {
			return;
		}
		const publishKeys = [
			`any-${this.uniq}`,
			`${newStateName}-${this.uniq}`,
			`${oldStateName}-${this.uniq}-any`,
			`${oldStateName}-${this.uniq}-${newStateName}`,
		];
		this.currentState = this.states.find(({ stateName }) => newStateName === stateName);
		publishKeys.forEach(key => this.subscriptionManager.publish({ key }));
	};

	dangerouslySetState(state: StateEnum) {
		this.currentState = this.states.find(({ stateName }) => state === stateName);
	}
}

interface TransitionObject<StateEnum> {
	enterState: StateEnum;
	fromState: StateEnum;
	callback: () => void;
}

class TransitionEventBuilder<StateEnum> {
	callback: () => void;
	fromState: StateEnum;

	constructor(public enterState: StateEnum) {}

	from = (fromState: StateEnum) => {
		this.fromState = fromState;
		return { run: this.run };
	};

	run = (callback: () => void): TransitionObject<StateEnum> => {
		this.callback = callback;
		return {
			enterState: this.enterState,
			fromState: this.fromState,
			callback,
		};
	};
}

class StateBuilder<StateEnum, TransitionFactors> {
	decisionFnc;
	constructor(public fromState: StateEnum) {}

	transitioningFromItGiven = (
		decisionFnc: (a: TransitionFactors) => StateEnum
	): StateDetails<StateEnum, TransitionFactors> => {
		return {
			stateName: this.fromState,
			transitionChecks: decisionFnc,
		};
	};
}

class TransitionDecisionBuilder<StateEnum> {
	transitionTuples: [StateEnum, boolean][];
	constructor(public toState: StateEnum) {
		this.transitionTuples = [];
	}

	orTo = (toState: StateEnum) => {
		this.toState = toState;
		return { when: this.when };
	};
	when = (transitionCondition: boolean) => {
		this.transitionTuples.push([this.toState, transitionCondition]);
		this.toState = null;
		return {
			orTo: this.orTo,
			decide: this.decide,
		};
	};
	decide = (): StateEnum => {
		const [newState] = this.transitionTuples.filter(([stateKey, shouldTransition]) => shouldTransition);
		return newState && newState.length ? newState[0] : null;
	};
}

export function stateMachineInitialiser<
	StateEnum,
	TransitionFactors,
	States extends StateDetails<StateEnum, TransitionFactors>
>() {
	return {
		acceloStateMachine: new AcceloStateMachine<StateEnum, TransitionFactors, States>(),
		enters: function(enterState: StateEnum | AnyKeyword) {
			const transitionEventBuilder = new TransitionEventBuilder<StateEnum | AnyKeyword>(enterState);
			return {
				run: transitionEventBuilder.run,
				from: transitionEventBuilder.from,
			};
		},
		addState: function(toState: StateEnum) {
			const stateBuilder = new StateBuilder<StateEnum, TransitionFactors>(toState);
			return { transitioningFromItGiven: stateBuilder.transitioningFromItGiven };
		},
		changeStateTo: function(toState: StateEnum) {
			const transitionDecisionBuilder = new TransitionDecisionBuilder<StateEnum>(toState);
			return { when: transitionDecisionBuilder.when };
		},
	};
}
