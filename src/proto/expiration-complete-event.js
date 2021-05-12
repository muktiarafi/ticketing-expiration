/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ExpirationCompleteEvent = (function() {

    /**
     * Properties of an ExpirationCompleteEvent.
     * @exports IExpirationCompleteEvent
     * @interface IExpirationCompleteEvent
     * @property {number|Long|null} [orderId] ExpirationCompleteEvent orderId
     */

    /**
     * Constructs a new ExpirationCompleteEvent.
     * @exports ExpirationCompleteEvent
     * @classdesc Represents an ExpirationCompleteEvent.
     * @implements IExpirationCompleteEvent
     * @constructor
     * @param {IExpirationCompleteEvent=} [properties] Properties to set
     */
    function ExpirationCompleteEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExpirationCompleteEvent orderId.
     * @member {number|Long} orderId
     * @memberof ExpirationCompleteEvent
     * @instance
     */
    ExpirationCompleteEvent.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ExpirationCompleteEvent instance using the specified properties.
     * @function create
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {IExpirationCompleteEvent=} [properties] Properties to set
     * @returns {ExpirationCompleteEvent} ExpirationCompleteEvent instance
     */
    ExpirationCompleteEvent.create = function create(properties) {
        return new ExpirationCompleteEvent(properties);
    };

    /**
     * Encodes the specified ExpirationCompleteEvent message. Does not implicitly {@link ExpirationCompleteEvent.verify|verify} messages.
     * @function encode
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {IExpirationCompleteEvent} message ExpirationCompleteEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExpirationCompleteEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified ExpirationCompleteEvent message, length delimited. Does not implicitly {@link ExpirationCompleteEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {IExpirationCompleteEvent} message ExpirationCompleteEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExpirationCompleteEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExpirationCompleteEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExpirationCompleteEvent} ExpirationCompleteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExpirationCompleteEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExpirationCompleteEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.orderId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExpirationCompleteEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExpirationCompleteEvent} ExpirationCompleteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExpirationCompleteEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExpirationCompleteEvent message.
     * @function verify
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExpirationCompleteEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isInteger(message.orderId) && !(message.orderId && $util.isInteger(message.orderId.low) && $util.isInteger(message.orderId.high)))
                return "orderId: integer|Long expected";
        return null;
    };

    /**
     * Creates an ExpirationCompleteEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExpirationCompleteEvent} ExpirationCompleteEvent
     */
    ExpirationCompleteEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ExpirationCompleteEvent)
            return object;
        var message = new $root.ExpirationCompleteEvent();
        if (object.orderId != null)
            if ($util.Long)
                (message.orderId = $util.Long.fromValue(object.orderId)).unsigned = false;
            else if (typeof object.orderId === "string")
                message.orderId = parseInt(object.orderId, 10);
            else if (typeof object.orderId === "number")
                message.orderId = object.orderId;
            else if (typeof object.orderId === "object")
                message.orderId = new $util.LongBits(object.orderId.low >>> 0, object.orderId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an ExpirationCompleteEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExpirationCompleteEvent
     * @static
     * @param {ExpirationCompleteEvent} message ExpirationCompleteEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExpirationCompleteEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.orderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.orderId = options.longs === String ? "0" : 0;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (typeof message.orderId === "number")
                object.orderId = options.longs === String ? String(message.orderId) : message.orderId;
            else
                object.orderId = options.longs === String ? $util.Long.prototype.toString.call(message.orderId) : options.longs === Number ? new $util.LongBits(message.orderId.low >>> 0, message.orderId.high >>> 0).toNumber() : message.orderId;
        return object;
    };

    /**
     * Converts this ExpirationCompleteEvent to JSON.
     * @function toJSON
     * @memberof ExpirationCompleteEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExpirationCompleteEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExpirationCompleteEvent;
})();

module.exports = $root;
