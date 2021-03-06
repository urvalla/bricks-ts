export interface IBricksLoggerOpts {
  app?: string,
  node?: string,
  module?: string,
  event?: string,
  requestId?: string,
  traceId?: string,
  data?: any,
}

export interface IBricksLogger {
  fatal: (message: string, opts?: IBricksLoggerOpts) => void
  error: (message: string, opts?: IBricksLoggerOpts) => void
  warn: (message: string, opts?: IBricksLoggerOpts) => void
  info: (message: string, opts?: IBricksLoggerOpts) => void
  debug: (message: string, opts?: IBricksLoggerOpts) => void
  trace: (message: string, opts?: IBricksLoggerOpts) => void
}

/**
 * Loggers default opt proxy
 */
export class BricksLoggerDefaultsProxy implements IBricksLogger {
  readonly logger: IBricksLogger;
  readonly opts: IBricksLoggerOpts;

  constructor(logger: IBricksLogger, opts: IBricksLoggerOpts) {
    this.logger = logger;
    this.opts = opts;
  }

  fatal(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.fatal(message, {
      ...this.opts,
      ...opts,
    });
  }

  error(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.error(message, {
      ...this.opts,
      ...opts,
    });
  }

  warn(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.warn(message, {
      ...this.opts,
      ...opts,
    });
  }

  info(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.info(message, {
      ...this.opts,
      ...opts,
    });
  }

  debug(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.debug(message, {
      ...this.opts,
      ...opts,
    });
  }

  trace(message: string, opts: IBricksLoggerOpts = {}): void {
    this.logger.trace(message, {
      ...this.opts,
      ...opts,
    });
  }
}

/**
 * Multiple loggers proxy
 */
export class BricksLoggerMultiProxy implements IBricksLogger {
  readonly loggers: Array<IBricksLogger>;

  constructor(...loggers: Array<IBricksLogger>) {
    this.loggers = loggers;
  }

  fatal(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.fatal(message, opts));
  }

  error(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.error(message, opts));
  }

  warn(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.warn(message, opts));
  }

  info(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.info(message, opts));
  }

  debug(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.debug(message, opts));
  }

  trace(message: string, opts?: IBricksLoggerOpts): void {
    this.loggers.forEach(logger => logger.trace(message, opts));
  }
}

/**
 * Simple console logger
 */
export class BricksLoggerConsole implements IBricksLogger {
  fatal(message: string, opts?: IBricksLoggerOpts): void {
    console.error(message, opts || undefined);
  }

  error(message: string, opts?: IBricksLoggerOpts): void {
    console.error(message, opts || undefined);
  }

  warn(message: string, opts?: IBricksLoggerOpts): void {
    console.warn(message, opts || undefined);
  }

  info(message: string, opts?: IBricksLoggerOpts): void {
    console.info(message, opts || undefined);
  }

  debug(message: string, opts?: IBricksLoggerOpts): void {
    console.debug(message, opts || undefined);
  }

  trace(message: string, opts?: IBricksLoggerOpts): void {
    console.trace(message, opts || undefined);
  }
}


export type ILoggerLevels = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';

/**
 * Logger with abstract call.
 * Can be used when call have a single point.
 */
export abstract class ProtoLogger implements IBricksLogger {
  fatal(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('fatal', message, opts);
  }

  error(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('error', message, opts);
  }

  warn(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('warn', message, opts);
  }

  info(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('info', message, opts);
  }

  debug(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('debug', message, opts);
  }

  trace(message: string, opts?: IBricksLoggerOpts): void {
    return this.call('trace', message, opts);
  }

  abstract call(level: ILoggerLevels, message: string, opts?: IBricksLoggerOpts): void;
}
