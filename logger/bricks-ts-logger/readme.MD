# Bricks TS > Logger > Common

Common logger interface for dependency inversion.

## How to use it

```js
// simple examples

const logger = new BricksLoggerConsole();

logger.info('Application launched');

logger.debug('User created', {user});

logger.error('Rest request failed', {data});
```


```js
// available methods

const logger: IBricksLogger = new BricksLoggerConsole();

logger.fatal('FATAL');
logger.error('ERROR');
logger.warn('WARN');
logger.info('INFO');
logger.debug('DEBUG');
logger.trace('TRACE');
```

Default options
```js
const opts =  {
  app: 'My app',
  node: 'Server 3',
  module: 'Auth',
  event: 'user:created',
  requestId,
  traceId,
};

// set default opts
const logger2 = new BricksLoggerDefaultsProxy(logger1, opts);
logger2.info('User created', {data});

// effectively the same
logger2.info('User created', {...opts, data});
```

Call multiple loggers at once
```js
const proxyLogger = new BricksLoggerMultiProxy(logger1, logger2);

// logs both using logger 1 and logger 2
proxyLogger.info('Something happened');
```
