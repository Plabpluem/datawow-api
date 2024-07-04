import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schema/comment.schema';
import { TopicsModule } from 'src/topics/topics.module';

@Module({
  imports:[MongooseModule.forFeature([{schema:CommentSchema,name:Comment.name}]),TopicsModule],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService]
})
export class CommentsModule {}
