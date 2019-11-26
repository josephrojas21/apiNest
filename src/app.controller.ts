import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDeliveryCategories(): Object {
    return this.appService.getDeliveryCategories();
  }

  @Get('/deliveryCategoriesById/:id')
  getdeliveryCategoriesById(@Param() params): Object{
    return this.appService.getdeliveryCategoriesById(params.id);
  }

  @Get('/deliveryWprkshopsById/:id')
  getWorkshopsById(@Param() params): Object{
    return this.appService.getWorkshopsById(params.id);
  }

  @Get('/apointments')
  getApointments(): Object{
    return this.appService.getApointments();
  }

  @Get('apointments/:id')
  getDetailsApoinments(@Param() params):Object {
    console.log(params.id);
    return this.appService.getDetailsApoinments(params.id)   
  }
 
  @Get('/reports')
  getReports(): Object{
    return this.appService.getReport();
  }

  
}
