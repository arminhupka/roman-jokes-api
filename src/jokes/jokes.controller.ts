import { Controller, Get, Inject, Param } from '@nestjs/common';
import { JokeInterface } from './interface/joke.interface';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(@Inject(JokesService) private jokesService: JokesService) {}

  @Get('/')
  getJokes(): JokeInterface[] {
    return this.jokesService.getJokes();
  }

  @Get('/:id')
  getSingleJoke(@Param('id') id: string) {
    return this.jokesService.getSingleJoke(id);
  }
}
