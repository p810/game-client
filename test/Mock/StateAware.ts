import { AbstractStateAware, State } from '../../src/StateAware';

export class MockStateAwareImplementation extends AbstractStateAware
{
    readonly STATE_FOO: State = 1;
    readonly STATE_BAR: State = 2;

    constructor()
    {
        super();
        this.setFoo();
    }

    setFoo(): void
    {
        this.setState(this.STATE_FOO);
    }

    isFoo(): boolean
    {
        return this.state === this.STATE_FOO;
    }

    setBar(): void
    {
        this.setState(this.STATE_BAR);
    }

    isBar(): boolean
    {
        return this.state === this.STATE_BAR;
    }
}