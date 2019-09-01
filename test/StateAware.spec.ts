import 'mocha';
import { expect } from 'chai';
import { MockStateAwareImplementation } from './Mock/StateAware';

describe('State', () => {
    const subject = new MockStateAwareImplementation();

    it('should return the current state', () => {
        expect(subject.isFoo()).to.be.true;
    });

    it('should update the state', () => {
        subject.setBar();

        expect(subject.isFoo()).to.be.false;
    });

    it('should return the state id value', () => {
        expect(subject.getState()).to.equal(subject.STATE_BAR);
    })
});