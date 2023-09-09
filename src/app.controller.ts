import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('items') // Define a new GET endpoint for fetching items
  getItems(): string[] {
    return this.appService.getItems();
  }

  @Get('items/:id') // Define a new GET endpoint for fetching a specific item by ID
  getItemById(@Param('id') id: string): string {
    return this.appService.getItemById(id);
  }

  @Post('items') // Define a new POST endpoint for creating an item
  createItem(@Body() item: string): void {
    this.appService.createItem(item);
  }

  @Put('items/:id') // Define a new PUT endpoint for updating an item by ID
  updateItem(@Param('id') id: string, @Body() newItem: string): void {
    this.appService.updateItem(id, newItem);
  }

  @Delete('items/:id') // Define a new DELETE endpoint for deleting an item by ID
  deleteItem(@Param('id') id: string): void {
    this.appService.deleteItem(id);
  }
}
