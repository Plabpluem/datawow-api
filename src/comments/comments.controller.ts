import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(id,createCommentDto);
  }

  @Get('topics/:id')
  findAllTopic(@Param('id') id:string){
    return this.commentsService.findAllTopic(id)
  }

  @Delete('topics/:id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
