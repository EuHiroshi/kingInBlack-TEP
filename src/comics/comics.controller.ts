import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) { }

  @Post()
  create(@Body() createComicDto: CreateComicDto) {
    return this.comicsService.create(createComicDto);
  }

  @Get()
  findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsService.findOne(id);
  }

  @Get('/:id/characters')
  getCharacters(@Param('id') id: string) {
    return this.comicsService.getCharacters(id);
  }

  @Get('/:id/img')
  getImgUrl(@Param('id') id: string) {
    return this.comicsService.getUrlImg(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComicDto: UpdateComicDto) {
    return this.comicsService.update(id, updateComicDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.comicsService.delete(id);
  }
}
