import { stateMachineInitialiser } from './index';

describe('acceloStateMachine, the state machine is managing h2o', function() {
	// workaround for subscription manager spies being difficult
	const subscriptionsToBeSpiedOn = {
		iceEnter: () => {},
		anyStateChange: () => {},
		liquidEnter: () => {},
		steamEnter: () => {},
		steamtoliquid: () => {},
	};

	const { acceloStateMachine, enters, addState, changeStateTo } = stateMachineInitialiser();
	class WaterStateMachine {
		acceloStateMachine;
		constructor() {
			this.acceloStateMachine = acceloStateMachine;
			this.acceloStateMachine.setup(this.states, 'liquid', this.subscriptions);
		}
		subscriptions = [
			enters('any').run(() => subscriptionsToBeSpiedOn.anyStateChange()),
			enters('ice').run(() => subscriptionsToBeSpiedOn.iceEnter()),
			enters('liquid').run(() => subscriptionsToBeSpiedOn.liquidEnter()),
			enters('steam').run(() => subscriptionsToBeSpiedOn.steamEnter()),
			enters('liquid')
				.from('steam')
				.run(() => subscriptionsToBeSpiedOn.steamtoliquid()),
		];

		states = [
			addState('ice').transitioningFromItGiven(({ isTemperatureAboveMelting }) =>
				changeStateTo('liquid')
					.when(isTemperatureAboveMelting)
					.decide()
			),
			addState('liquid').transitioningFromItGiven(({ isTemperatureAboveBoiling, isTemperatureBelowMelting }) =>
				changeStateTo('steam')
					.when(isTemperatureAboveBoiling)
					.orTo('ice')
					.when(isTemperatureBelowMelting)
					.decide()
			),
			addState('steam').transitioningFromItGiven(({ isTemperatureBelowBoiling }) =>
				changeStateTo('liquid')
					.when(isTemperatureBelowBoiling)
					.decide()
			),
		];

		stateMachineDigest(temperature) {
			this.acceloStateMachine.updateStateMachine({
				isTemperatureAboveBoiling: temperature > 100,
				isTemperatureAboveMelting: temperature > 0,
				isTemperatureBelowBoiling: temperature <= 100,
				isTemperatureBelowMelting: temperature <= 0,
			});
		}

		currentState() {
			return this.acceloStateMachine.currentState.stateName;
		}
	}
	describe('when updating the temperature of the water', () => {
		let waterStateMachine;
		beforeAll(() => {
			waterStateMachine = new WaterStateMachine();
		});
		beforeEach(() => {
			spyOn(subscriptionsToBeSpiedOn, 'anyStateChange');
			spyOn(subscriptionsToBeSpiedOn, 'liquidEnter');
			spyOn(subscriptionsToBeSpiedOn, 'iceEnter');
			spyOn(subscriptionsToBeSpiedOn, 'steamEnter');
			spyOn(subscriptionsToBeSpiedOn, 'steamtoliquid');
		});

		it('to a temperature below freezing', () => {
			waterStateMachine.stateMachineDigest(-5);

			expect(waterStateMachine.currentState()).toBe('ice');
			expect(subscriptionsToBeSpiedOn.iceEnter).toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.anyStateChange).toHaveBeenCalled();

			expect(subscriptionsToBeSpiedOn.liquidEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamtoliquid).not.toHaveBeenCalled();
		});

		it('then to a temperature above mesting', () => {
			waterStateMachine.stateMachineDigest(50);

			expect(waterStateMachine.currentState()).toBe('liquid');
			expect(subscriptionsToBeSpiedOn.liquidEnter).toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.anyStateChange).toHaveBeenCalled();

			expect(subscriptionsToBeSpiedOn.steamEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.iceEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamtoliquid).not.toHaveBeenCalled();
		});

		it('then to a temperature above boiling', () => {
			waterStateMachine.stateMachineDigest(150);

			expect(waterStateMachine.currentState()).toBe('steam');
			expect(subscriptionsToBeSpiedOn.steamEnter).toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.anyStateChange).toHaveBeenCalled();

			expect(subscriptionsToBeSpiedOn.liquidEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.iceEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamtoliquid).not.toHaveBeenCalled();
		});

		it('then to a temperature below boiling', () => {
			waterStateMachine.stateMachineDigest(-150);

			expect(waterStateMachine.currentState()).toBe('liquid');
			expect(subscriptionsToBeSpiedOn.liquidEnter).toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamtoliquid).toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.anyStateChange).toHaveBeenCalled();

			expect(subscriptionsToBeSpiedOn.iceEnter).not.toHaveBeenCalled();
			expect(subscriptionsToBeSpiedOn.steamEnter).not.toHaveBeenCalled();
		});
	});
});
