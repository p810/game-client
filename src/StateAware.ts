export type State = string|number;

export interface StateAware
{
    state: State;

    /**
     * Returns the object's current state
     */
    getState(): State;

    /**
     * Sets the object's state
     */
    setState(state: State): void;
}

export class AbstractStateAware implements StateAware
{
    state: State;

    getState(): State
    {
        return this.state;
    }

    setState(state: State): void
    {
        this.state = state;
    }
}
