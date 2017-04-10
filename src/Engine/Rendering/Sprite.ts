﻿
import { Texture } from "./Texture";
import { Vec2 } from "../Math/Vec2";
import { Vec4 } from "../Math/Vec4";
import { Batch } from "./Batch";

export class Sprite {
	public texture: Texture;
	public position = Vec2.create();
	public scale = 1;
	public rotation = 0;

	public crop: Vec4 = null;


	constructor(texture: Texture) {
		console.assert(texture != null, `Texture is ${texture}`);
		this.texture = texture;
	}
	

	/*
		Add to a batch object.
	*/
	public addToBatch(batch: Batch) {
		console.assert(batch != null, `Batch is ${batch}`);

		// determine vertex and texture positions
		
		const x = this.position.x;
		const y = this.position.y;
		const width = this.texture.size.x;
		const height = this.texture.size.y;
		const crop = this.crop;
		
		// don't scale before center calculation
		const centerX = x + width * .5;
		const centerY = y + height * .5;
		
		const halfWidth = width * this.scale * .5;
		const halfHeight = height * this.scale * .5;

		const vertexX0 = centerX - halfWidth;
		const vertexY0 = centerY - halfHeight;
		const vertexX1 = centerX + halfWidth;
		const vertexY1 = centerY + halfHeight;

		let textureX0;
		let textureY0;
		let textureX1;
		let textureY1;

		if (crop === null) {
			textureX0 = x;
			textureY0 = y;
			textureX1 = textureX0 + width;
			textureY1 = textureY0 + height;
		}
		else {
			// TODO: fix this
			textureX0 = crop.x + x;
			textureY0 = crop.y + y;
			textureX1 = textureX0 + crop.width;
			textureY1 = textureY0 + crop.height;
		}


		// buffer data

		const array = batch.array;
		let offset = batch.arrayOffset;

		array[offset++] = vertexX0;
		array[offset++] = vertexY0;
		array[offset++] = textureX0;
		array[offset++] = textureY0;

		array[offset++] = vertexX0;
		array[offset++] = vertexY1;
		array[offset++] = textureX0;
		array[offset++] = textureY1;

		array[offset++] = vertexX1;
		array[offset++] = vertexY0;
		array[offset++] = textureX1;
		array[offset++] = textureY0;

		array[offset++] = vertexX0;
		array[offset++] = vertexY1;
		array[offset++] = textureX0;
		array[offset++] = textureY1;

		array[offset++] = vertexX1;
		array[offset++] = vertexY0;
		array[offset++] = textureX1;
		array[offset++] = textureY0;

		array[offset++] = vertexX1;
		array[offset++] = vertexY1;
		array[offset++] = textureX1;
		array[offset++] = textureY1;

		batch.arrayOffset = offset;
	}
}