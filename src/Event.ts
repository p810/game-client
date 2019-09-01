export interface EventRegistry<T>
{
    /**
     * A dictionary of events and their observers
     */
    events: Events<T>;

    /**
     * Registers an observer to an event and returns its position in the list
     */
    on(event: string, callback: T): number;

    /**
     * Removes an observer from an event if the ID is supplied; otherwise removes
     * the entire event. Returns a boolean indicating success or failure.
     */
    off(event: string, id?: number): boolean;

    /**
     * Returns a boolean indicating whether the event exists in the dictionary
     */
    has(event: string): boolean;

    /**
     * Returns the list of observers for a given event, or null if it doesn't
     * exist
     */
    get(event: string): null|T[];

    /**
     * Adds the given event to the dictionary and returns a boolean indicating
     * success or failure
     */
    create(event: string): boolean;

    /**
     * Invokes each callback attached to the given event
     */
    emit(event: string, ...args: any): void;
}

export type Events<T> = {
    [key: string]: T[]
}

export class BaseEmitter implements EventRegistry<Function>
{
    events: Events<Function> = {};

    on(event: string, callback: Function): number
    {
        if (! this.has(event)) {
            this.create(event);
        }

        let count = this.events[event].push(callback);

        return count - 1;
    }

    off(event: string, id?: number): boolean
    {
        if (! this.has(event)) {
            return false;
        }

        if (id !== undefined) {
            if (! (id in this.events[event])) {
                return false;
            }

            return delete this.events[event][id];
        }

        return delete this.events[event];
    }

    has(event: string): boolean
    {
        return this.events.hasOwnProperty(event);
    }

    get(event: string): null|Function[]
    {
        if (! this.has(event)) {
            return null;
        }

        return this.events[event];
    }

    create(event: string): boolean
    {
        if (this.has(event)) {
            return false;
        }

        this.events[event] = [];

        return true;
    }

    emit(event: string, ...args: any): void
    {
        if (! this.has(event)) {
            return;
        }

        for (let callback of this.events[event]) {
            callback.apply({}, args);
        }
    }
}
