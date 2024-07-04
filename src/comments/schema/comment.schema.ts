import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CommentDocument = Comment & Document
@Schema()
export class Comment{
    @Prop()
    user: string
    
    @Prop()
    comment: string

    @Prop({default: Date.now})
    timestamp: Date

    @Prop({type:Types.ObjectId,ref:"Topic"})
    topicId: Types.ObjectId
}

export const CommentSchema = SchemaFactory.createForClass(Comment)