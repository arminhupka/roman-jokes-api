import { Injectable, NotFoundException } from '@nestjs/common';
import jokes from '../data/jokes';
import { JokeInterface } from './interface/joke.interface';

@Injectable()
export class JokesService {
  getJokes(): JokeInterface[] {
    return jokes;
  }

  getSingleJoke(id: string): JokeInterface | NotFoundException {
    const joke = jokes.find((joke) => joke.id === Number(id));

    if (!joke) {
      throw new NotFoundException("There's no joke with provided ID");
    }

    return joke;
  }
}
