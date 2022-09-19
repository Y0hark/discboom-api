'use strict';

/**
 * esper controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::esper.esper', ({ strapi }) => ({
	async findOne(ctx) {
		const { slug } = ctx.params;

		const entity = await strapi.db.query('api::esper.esper').findOne({  where: { slug }, populate: [ 'espers_elements', 'picture' ] });
		const sanitizedEntity = await this.sanitizeOutput(entity);

		return this.transformResponse(sanitizedEntity);
  	},
	async findOneGod(ctx) {
		const { slug_god } = ctx.params;

		const entity = await strapi.db.query('api::esper.esper').findOne({  where: { slug_god }, populate: [ 'espers_elements', 'picture' ] });
		const sanitizedEntity = await this.sanitizeOutput(entity);

		return this.transformResponse(sanitizedEntity);
  	}
}));
