import * as $protobuf from "protobufjs";
/** Properties of an ExpirationCompleteEvent. */
export interface IExpirationCompleteEvent {

    /** ExpirationCompleteEvent orderId */
    orderId?: (number|Long|null);
}

/** Represents an ExpirationCompleteEvent. */
export class ExpirationCompleteEvent implements IExpirationCompleteEvent {

    /**
     * Constructs a new ExpirationCompleteEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExpirationCompleteEvent);

    /** ExpirationCompleteEvent orderId. */
    public orderId: (number|Long);

    /**
     * Creates a new ExpirationCompleteEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExpirationCompleteEvent instance
     */
    public static create(properties?: IExpirationCompleteEvent): ExpirationCompleteEvent;

    /**
     * Encodes the specified ExpirationCompleteEvent message. Does not implicitly {@link ExpirationCompleteEvent.verify|verify} messages.
     * @param message ExpirationCompleteEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExpirationCompleteEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExpirationCompleteEvent message, length delimited. Does not implicitly {@link ExpirationCompleteEvent.verify|verify} messages.
     * @param message ExpirationCompleteEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExpirationCompleteEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExpirationCompleteEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExpirationCompleteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExpirationCompleteEvent;

    /**
     * Decodes an ExpirationCompleteEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExpirationCompleteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExpirationCompleteEvent;

    /**
     * Verifies an ExpirationCompleteEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExpirationCompleteEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExpirationCompleteEvent
     */
    public static fromObject(object: { [k: string]: any }): ExpirationCompleteEvent;

    /**
     * Creates a plain object from an ExpirationCompleteEvent message. Also converts values to other types if specified.
     * @param message ExpirationCompleteEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExpirationCompleteEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExpirationCompleteEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
