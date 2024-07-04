import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Topic, TopicDocument } from './schema/topic.schema';

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topic.name) private topicModel:Model<TopicDocument>){}
  async create(createTopicDto: CreateTopicDto) {
    const topic = new this.topicModel(createTopicDto)
    return topic.save()
  }

  async findAll() {
    const topic = await this.topicModel.find().exec()
    return topic
  }

  async findAllAdmin(user: string){
    const topic = await this.topicModel.find({"user":user}).exec()
    return topic
  }

  async findOne(id: string){
    const topic = await this.topicModel.findById(id)
    return topic
  }

  async update(id: string, updateTopicDto: UpdateTopicDto) {
    const topic = await this.topicModel.findByIdAndUpdate(id,updateTopicDto,{new:true})
    return topic
  }

  remove(id: string) {
    return this.topicModel.findByIdAndDelete(id)
  }
}
