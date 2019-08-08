# accelo-state-machine

Yet another state-machine, but with a very nice 👩‍🍳💋 chaining api, with type saftey!

### How to use?

Given the example of a very simple state-machine managing the states of water.

<svg xmlns="http://www.w3.org/2000/svg" style="background-color:#fff" width="1274" height="410" viewBox="-0.5 -0.5 1274 410">
  <path fill="#fff" stroke="#000" stroke-width="3" pointer-events="none" d="M0 129h189v120H0z"/>
  <switch transform="matrix(3 0 0 3 67.5 166.5)">
    <foreignObject pointer-events="all" width="18" height="15" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;width:19px;overflow-wrap:normal;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit" display="inline-block" text-decoration="inherit" white-space="normal">
          <font font-size="14">
            ice
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="9" y="14" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path fill="#fff" stroke="#000" stroke-width="3" pointer-events="none" d="M510 129h210v120H510z"/>
  <switch transform="matrix(3 0 0 3 565.5 166.5)">
    <foreignObject pointer-events="all" width="33" height="15" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;width:34px;overflow-wrap:normal;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit" display="inline-block" text-decoration="inherit" white-space="normal">
          <font font-size="14">
            liquid
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="17" y="14" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path fill="#fff" stroke="#000" stroke-width="3" pointer-events="none" d="M1069.5 129h201v120h-201z"/>
  <switch transform="matrix(3 0 0 3 1112.5 166.5)">
    <foreignObject pointer-events="all" width="38" height="15" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;width:39px;overflow-wrap:normal;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit" display="inline-block" text-decoration="inherit" white-space="normal">
          <font font-size="14">
            steam
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="19" y="14" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path d="M141 129q369-240 418.81-18.64" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <path d="M563.26 125.73l-14.85-18.19 11.4 2.82 9.09-7.42z" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <switch transform="matrix(3 0 0 3 242.5 28.5)">
    <foreignObject pointer-events="all" width="79" height="48" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit;background-color:#fff" display="inline-block" text-decoration="inherit">
          <font font-size="14">
            Temperature
            rises above
            melting
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="40" y="30" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path d="M669 129q381-180 443.16-17.84" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <path d="M1117.8 125.87l-17.32-15.85 11.68 1.14 7.93-8.66z" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <switch transform="matrix(3 0 0 3 795.5 -2.5)">
    <foreignObject pointer-events="all" width="79" height="48" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit;background-color:#fff" display="inline-block" text-decoration="inherit">
          <font font-size="14">
            Temperature
            rises above
            boiling
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="40" y="30" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path d="M564 249q-324 150-412.48 15.94" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <path d="M142.85 251.8l20.33 11.74-11.66 1.4-5.87 10.17z" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <switch transform="matrix(3 0 0 3 234.5 242.5)">
    <foreignObject pointer-events="all" width="79" height="48" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit;background-color:#fff" display="inline-block" text-decoration="inherit">
          <font font-size="14">
            Temperature
            falls below
            melting
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="40" y="30" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
  <path d="M1119 249q-399 120-442.53 17.58" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <path d="M670.31 252.09l17.88 15.22-11.72-.73-7.61 8.94z" stroke="#000" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/>
  <switch transform="matrix(3 0 0 3 755.5 237.5)">
    <foreignObject pointer-events="all" width="79" height="48" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" overflow="visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="line-height:1.2;vertical-align:top;text-align:center" display="inline-block" font-size="12" font-family="Helvetica" color="#000" white-space="nowrap">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:inherit;background-color:#fff" display="inline-block" text-decoration="inherit">
          <font font-size="14">
            Temperature
            falls below
            boiling
          </font>
        </div>
      </div>
    </foreignObject>
    <text x="40" y="30" text-anchor="middle" font-size="12" font-family="'Helvetica'">
      [Not supported by viewer]
    </text>
  </switch>
</svg>

#### JS example

```js
// import and call the initialiser to get our state machine plus some functions used for the api
import { stateMachineInitialiser } from './index';
const { acceloStateMachine, enters, addState, changeStateTo } = stateMachineInitialiser();

// now we define our states and the transitions out of each.
// The function we define in "transitioningFromItGiven" destructures booleans,
// At this point we can just focus on making sure they're namee well.
const states = [
    addState('ice').transitioningFromItGiven(({ isTemperatureAboveMelting }) =>
        changeStateTo('liquid')
            .when(isTemperatureAboveMelting)
            .decide()
    ),
    // In the case of liquid that can transition to more than one state, we chain .orTo to add more transitions
    // if multiple booleans are true the statemachine will transition to the first 
    // and if none are true it won't change state.
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

// now we want to focus on how to define the booleans we destructured above.
// we're wrapping the updateStateMachine method in a function that only requires
// temperature to make updating the statemachine simple.
const stateMachineDigest(temperature) => {
    this.acceloStateMachine.updateStateMachine({
        isTemperatureAboveBoiling: temperature > 100,
        isTemperatureAboveMelting: temperature > 0,
        isTemperatureBelowBoiling: temperature <= 100,
        isTemperatureBelowMelting: temperature <= 0,
    });
};

// We define our subscriptions to state-machine events.
// We can use the "any" key word to listen to all events, as well as
// being more specific
subscriptions = [
    enters('any').run(() => console.log('every state change')),
    enters('ice').run(() => console.log('current state: ice')),
    enters('liquid').run(() => console.log('current state: liquid')),
    enters('steam').run(() => console.log('current state: steam')),
    enters('liquid')
        .from('steam')
        .run(() => console.log('transitioned from steam to liquid')),
];

// the setup takes the array of states, an inital state and the subscriptions.
acceloStateMachine.setup(states, 'liquid', subscriptions);

// now we can run the digest when ever something relevant changes (temperature in this case).
waterStateMachine.stateMachineDigest(-5); // 'every state change' + 'current state: ice'
waterStateMachine.stateMachineDigest(50); // 'every state change' + 'current state: liquid'
waterStateMachine.stateMachineDigest(150); // 'every state change' + 'current state: steam'
waterStateMachine.stateMachineDigest(-150); // 'every state change' + 'current state: liquid' + 'transitioned from steam to liquid'

// No state change so nothing will be run. There is no harm in running the digest extra times.
[-150, -150, -150, -150, -150].forEach((temperature) => waterStateMachine.stateMachineDigest(temperature))

```

#### TS example 😎

```ts
// Using TS to define our States, StateDetails (which should always look the same)
// and TransitionFactors, which is a bunch booleans, all the factors that could trigger a transition
export enum State {
	Ice = 'ice',
	Liquid = 'liquid',
	Steam = 'steam',
}

interface TransitionFactors {
    isTemperatureAboveBoiling: boolean;
    isTemperatureAboveMelting: boolean;
    isTemperatureBelowBoiling: boolean;
    isTemperatureBelowMelting: boolean;
}

interface StateDetails {
	stateName: State;
	transitionChecks(factors: TransitionFactors): State;
}

// import and call the initialiser with the types defined above to get our state machine
// plus some functions used for the api, useing these functions will now have type saftely too.
import { stateMachineInitialiser } from './index';
const { acceloStateMachine, enters, addState, changeStateTo } = stateMachineInitialiser<
	State,
	TransitionFactors,
	StateDetails
>();

// now we define our states and the transitions out of each.
// The function we define in "transitioningFromItGiven" destructures booleans from TransitionFactors,
const states = [
    addState(State.Ice).transitioningFromItGiven(({ isTemperatureAboveMelting }) =>
        changeStateTo(State.Liquid)
            .when(isTemperatureAboveMelting)
            .decide()
    ),
    // In the case of liquid that can transition to more than one state, we chain .orTo to add more transitions
    // if multiple booleans are true the statemachine will transition to the first 
    // and if none are true it won't change state.
    addState(State.Liquid).transitioningFromItGiven(({ isTemperatureAboveBoiling, isTemperatureBelowMelting }) =>
        changeStateTo(State.Steam)
            .when(isTemperatureAboveBoiling)
            .orTo(State.Ice)
            .when(isTemperatureBelowMelting)
            .decide()
    ),
    addState(State.Steam).transitioningFromItGiven(({ isTemperatureBelowBoiling }) =>
        changeStateTo(State.Liquid)
            .when(isTemperatureBelowBoiling)
            .decide()
    ),
];

// now we want to define the booleans we destructured above.
// we're wrapping the updateStateMachine method in a function that only requires
// temperature to make updating the statemachine simple.
const stateMachineDigest(temperature) => {
    this.acceloStateMachine.updateStateMachine({
        isTemperatureAboveBoiling: temperature > 100,
        isTemperatureAboveMelting: temperature > 0,
        isTemperatureBelowBoiling: temperature <= 100,
        isTemperatureBelowMelting: temperature <= 0,
    });
};

// We define our subscriptions to state-machine events.
// We can use the "any" key word to listen to all events, as well as
// being more specific
subscriptions = [
    enters('any').run(() => console.log('every state change')),
    enters(State.Ice).run(() => console.log('current state: ice')),
    enters(State.Liquid).run(() => console.log('current state: liquid')),
    enters(State.Steam).run(() => console.log('current state: steam')),
    enters(State.Liquid)
        .from(State.Steam)
        .run(() => console.log('transitioned from steam to liquid')),
];

// the setup takes the array of states, an inital state and the subscriptions.
acceloStateMachine.setup(states, State.Liquid, subscriptions);

// now we can run the digest when ever something relevant changes (temperature in this case).
waterStateMachine.stateMachineDigest(-5); // 'every state change' + 'current state: ice'
waterStateMachine.stateMachineDigest(50); // 'every state change' + 'current state: liquid'
waterStateMachine.stateMachineDigest(150); // 'every state change' + 'current state: steam'
waterStateMachine.stateMachineDigest(-150); // 'every state change' + 'current state: liquid' + 'transitioned from steam to liquid'

// No state change so nothing will be run. There is no harm in running the digest extra times.
[-150, -150, -150, -150, -150].forEach((temperature) => waterStateMachine.stateMachineDigest(temperature))

```
