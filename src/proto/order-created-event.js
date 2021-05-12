/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.OrderCreatedEvent = (function() {

    /**
     * Properties of an OrderCreatedEvent.
     * @exports IOrderCreatedEvent
     * @interface IOrderCreatedEvent
     * @property {number|Long|null} [id] OrderCreatedEvent id
     * @property {string|null} [status] OrderCreatedEvent status
     * @property {number|Long|null} [version] OrderCreatedEvent version
     * @property {number|Long|null} [userId] OrderCreatedEvent userId
     * @property {string|null} [expiresAt] OrderCreatedEvent expiresAt
     * @property {number|Long|null} [ticketId] OrderCreatedEvent ticketId
     * @property {number|null} [ticketPrice] OrderCreatedEvent ticketPrice
     */

    /**
     * Constructs a new OrderCreatedEvent.
     * @exports OrderCreatedEvent
     * @classdesc Represents an OrderCreatedEvent.
     * @implements IOrderCreatedEvent
     * @constructor
     * @param {IOrderCreatedEvent=} [properties] Properties to set
     */
    function OrderCreatedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OrderCreatedEvent id.
     * @member {number|Long} id
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * OrderCreatedEvent status.
     * @member {string} status
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.status = "";

    /**
     * OrderCreatedEvent version.
     * @member {number|Long} version
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * OrderCreatedEvent userId.
     * @member {number|Long} userId
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * OrderCreatedEvent expiresAt.
     * @member {string} expiresAt
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.expiresAt = "";

    /**
     * OrderCreatedEvent ticketId.
     * @member {number|Long} ticketId
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.ticketId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * OrderCreatedEvent ticketPrice.
     * @member {number} ticketPrice
     * @memberof OrderCreatedEvent
     * @instance
     */
    OrderCreatedEvent.prototype.ticketPrice = 0;

    /**
     * Creates a new OrderCreatedEvent instance using the specified properties.
     * @function create
     * @memberof OrderCreatedEvent
     * @static
     * @param {IOrderCreatedEvent=} [properties] Properties to set
     * @returns {OrderCreatedEvent} OrderCreatedEvent instance
     */
    OrderCreatedEvent.create = function create(properties) {
        return new OrderCreatedEvent(properties);
    };

    /**
     * Encodes the specified OrderCreatedEvent message. Does not implicitly {@link OrderCreatedEvent.verify|verify} messages.
     * @function encode
     * @memberof OrderCreatedEvent
     * @static
     * @param {IOrderCreatedEvent} message OrderCreatedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderCreatedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.version);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
        if (message.expiresAt != null && Object.hasOwnProperty.call(message, "expiresAt"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.expiresAt);
        if (message.ticketId != null && Object.hasOwnProperty.call(message, "ticketId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.ticketId);
        if (message.ticketPrice != null && Object.hasOwnProperty.call(message, "ticketPrice"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.ticketPrice);
        return writer;
    };

    /**
     * Encodes the specified OrderCreatedEvent message, length delimited. Does not implicitly {@link OrderCreatedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OrderCreatedEvent
     * @static
     * @param {IOrderCreatedEvent} message OrderCreatedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderCreatedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OrderCreatedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof OrderCreatedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OrderCreatedEvent} OrderCreatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderCreatedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OrderCreatedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.status = reader.string();
                break;
            case 3:
                message.version = reader.int64();
                break;
            case 4:
                message.userId = reader.int64();
                break;
            case 5:
                message.expiresAt = reader.string();
                break;
            case 6:
                message.ticketId = reader.int64();
                break;
            case 7:
                message.ticketPrice = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OrderCreatedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OrderCreatedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OrderCreatedEvent} OrderCreatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderCreatedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OrderCreatedEvent message.
     * @function verify
     * @memberof OrderCreatedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OrderCreatedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                return "version: integer|Long expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
            if (!$util.isString(message.expiresAt))
                return "expiresAt: string expected";
        if (message.ticketId != null && message.hasOwnProperty("ticketId"))
            if (!$util.isInteger(message.ticketId) && !(message.ticketId && $util.isInteger(message.ticketId.low) && $util.isInteger(message.ticketId.high)))
                return "ticketId: integer|Long expected";
        if (message.ticketPrice != null && message.hasOwnProperty("ticketPrice"))
            if (typeof message.ticketPrice !== "number")
                return "ticketPrice: number expected";
        return null;
    };

    /**
     * Creates an OrderCreatedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OrderCreatedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OrderCreatedEvent} OrderCreatedEvent
     */
    OrderCreatedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.OrderCreatedEvent)
            return object;
        var message = new $root.OrderCreatedEvent();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.status != null)
            message.status = String(object.status);
        if (object.version != null)
            if ($util.Long)
                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
            else if (typeof object.version === "string")
                message.version = parseInt(object.version, 10);
            else if (typeof object.version === "number")
                message.version = object.version;
            else if (typeof object.version === "object")
                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
        if (object.expiresAt != null)
            message.expiresAt = String(object.expiresAt);
        if (object.ticketId != null)
            if ($util.Long)
                (message.ticketId = $util.Long.fromValue(object.ticketId)).unsigned = false;
            else if (typeof object.ticketId === "string")
                message.ticketId = parseInt(object.ticketId, 10);
            else if (typeof object.ticketId === "number")
                message.ticketId = object.ticketId;
            else if (typeof object.ticketId === "object")
                message.ticketId = new $util.LongBits(object.ticketId.low >>> 0, object.ticketId.high >>> 0).toNumber();
        if (object.ticketPrice != null)
            message.ticketPrice = Number(object.ticketPrice);
        return message;
    };

    /**
     * Creates a plain object from an OrderCreatedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OrderCreatedEvent
     * @static
     * @param {OrderCreatedEvent} message OrderCreatedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OrderCreatedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.status = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.version = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.expiresAt = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.ticketId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ticketId = options.longs === String ? "0" : 0;
            object.ticketPrice = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.version != null && message.hasOwnProperty("version"))
            if (typeof message.version === "number")
                object.version = options.longs === String ? String(message.version) : message.version;
            else
                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
        if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
            object.expiresAt = message.expiresAt;
        if (message.ticketId != null && message.hasOwnProperty("ticketId"))
            if (typeof message.ticketId === "number")
                object.ticketId = options.longs === String ? String(message.ticketId) : message.ticketId;
            else
                object.ticketId = options.longs === String ? $util.Long.prototype.toString.call(message.ticketId) : options.longs === Number ? new $util.LongBits(message.ticketId.low >>> 0, message.ticketId.high >>> 0).toNumber() : message.ticketId;
        if (message.ticketPrice != null && message.hasOwnProperty("ticketPrice"))
            object.ticketPrice = options.json && !isFinite(message.ticketPrice) ? String(message.ticketPrice) : message.ticketPrice;
        return object;
    };

    /**
     * Converts this OrderCreatedEvent to JSON.
     * @function toJSON
     * @memberof OrderCreatedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OrderCreatedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OrderCreatedEvent;
})();

module.exports = $root;
