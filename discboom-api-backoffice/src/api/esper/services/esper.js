'use strict';

/**
 * esper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::esper.esper');
