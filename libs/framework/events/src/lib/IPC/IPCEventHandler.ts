import { IpcMainInvokeEvent } from 'electron';
import { injectable, unmanaged } from 'inversify';

/**
 * Defines a basic IPC (inter process communication) event handler
 */
@injectable()
export abstract class IPCEventHandler<T> {
    /**
     * The name of the event which will be handled by the event handler
     */
    eventName: string;

    protected constructor(@unmanaged() eventName: string) {
        this.eventName = eventName;

        this.handleEvent = this.handleEvent.bind(this);
    }

    /**
     * Handles the event
     * @param event The IPC event
     * @param args The event argument
     */
    public abstract async handleEvent(
        event: IpcMainInvokeEvent,
        args: string[],
    ): Promise<T>;
}
