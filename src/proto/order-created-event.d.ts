import * as $protobuf from "protobufjs";
/** Properties of an OrderCreatedEvent. */
export interface IOrderCreatedEvent {

    /** OrderCreatedEvent id */
    id?: (number|Long|null);

    /** OrderCreatedEvent status */
    status?: (string|null);

    /** OrderCreatedEvent version */
    version?: (number|Long|null);

    /** OrderCreatedEvent userId */
    userId?: (number|Long|null);

    /** OrderCreatedEvent expiresAt */
    expiresAt?: (string|null);

    /** OrderCreatedEvent ticketId */
    ticketId?: (number|Long|null);

    /** OrderCreatedEvent ticketPrice */
    ticketPrice?: (number|null);
}

/** Represents an OrderCreatedEvent. */
export class OrderCreatedEvent implements IOrderCreatedEvent {

    /**
     * Constructs a new OrderCreatedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderCreatedEvent);

    /** OrderCreatedEvent id. */
    public id: (number|Long);

    /** OrderCreatedEvent status. */
    public status: string;

    /** OrderCreatedEvent version. */
    public version: (number|Long);

    /** OrderCreatedEvent userId. */
    public userId: (number|Long);

    /** OrderCreatedEvent expiresAt. */
    public expiresAt: string;

    /** OrderCreatedEvent ticketId. */
    public ticketId: (number|Long);

    /** OrderCreatedEvent ticketPrice. */
    public ticketPrice: number;

    /**
     * Creates a new OrderCreatedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderCreatedEvent instance
     */
    public static create(properties?: IOrderCreatedEvent): OrderCreatedEvent;

    /**
     * Encodes the specified OrderCreatedEvent message. Does not implicitly {@link OrderCreatedEvent.verify|verify} messages.
     * @param message OrderCreatedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderCreatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderCreatedEvent message, length delimited. Does not implicitly {@link OrderCreatedEvent.verify|verify} messages.
     * @param message OrderCreatedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderCreatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderCreatedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderCreatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderCreatedEvent;

    /**
     * Decodes an OrderCreatedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderCreatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderCreatedEvent;

    /**
     * Verifies an OrderCreatedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderCreatedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderCreatedEvent
     */
    public static fromObject(object: { [k: string]: any }): OrderCreatedEvent;

    /**
     * Creates a plain object from an OrderCreatedEvent message. Also converts values to other types if specified.
     * @param message OrderCreatedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderCreatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderCreatedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
