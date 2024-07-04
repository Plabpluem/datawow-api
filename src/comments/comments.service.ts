import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './schema/comment.schema';
import { Model, Types } from 'mongoose';
import { TopicsService } from 'src/topics/topics.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,private topicService:TopicsService
  ) {}
  async create(id: string, createCommentDto: CreateCommentDto):Promise<CommentDocument> {
    const comment = new this.commentModel({...createCommentDto,topicId:id});
    const topic = await this.topicService.findOne(id)
    topic.comment++
    await topic.save()
    const savedComment = await comment.save();
    return savedComment;
  }

  async findAllTopic(id: string){
    const topic = await this.topicService.findOne(id)
    const comment = await this.commentModel.find({"topicId":id}).exec()
    return {comment,topic}
  }

  async remove(id:string){
    await this.topicService.remove(id)
    const comment = await this.commentModel.deleteMany({"topicId":id}).exec()
    return comment
  }
}
