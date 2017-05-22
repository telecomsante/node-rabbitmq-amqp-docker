const _HOST         = 'localhost';
const _PORT         = 5672;
const _LOGIN        = 'guest';
const _PASSWORD     = 'guest';
const _CONNECTION_TIMEOUT = 10000;
const _AUTH_MECHANISM = 'AMQPLAIN';
const _V_HOST       = '/';
const _NO_DELAY     = true;
const _SSL          = {
    enabled : false
};
const _QUEUE_NAME   = 'my-queue';

module.exports      = {
    HOST:           _HOST,
    PORT:           _PORT,
    LOGIN:          _LOGIN,
    PASSWORD:       _PASSWORD,
    CONNECTION_TIMEOUT: _CONNECTION_TIMEOUT,
    AUTH_MECHANISM: _AUTH_MECHANISM,
    V_HOST:         _V_HOST,
    NO_DELAY:       _NO_DELAY,
    SSL:            _SSL,
    QUEUE_NAME:     _QUEUE_NAME,
};