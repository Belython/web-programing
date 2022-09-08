import { Controller, Get, Post, Render, Session, UseGuards } from '@nestjs/common';
import { UserService } from './user/user.service';
import { optionalAuthGuard } from './auth/optionalAuth.guard';
import ThirdParty from 'supertokens-node/recipe/thirdparty';
import { SessionContainer } from 'supertokens-node/lib/build/recipe/session/faunadb';

@Controller()
export class AppController {
  constructor(public userService: UserService) {}

  @UseGuards(optionalAuthGuard)
  @Get('/')
  @Render('index')
  async index(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @Post('/')
  @Render('index')
  add() {
    this.userService.add('Здарова');

    return {
      user: this.userService.get(),
    };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/Buy.html')
  @Render('Buy')
  async buy(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/accessories.html')
  @Render('accessories')
  async accessories(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/allorder.html')
  @Render('allorder')
  async allorder(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/comparison.html')
  @Render('comparison')
  async comprision(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/delivery.html')
  @Render('delivery')
  async delivery(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @Get('/auth/callback/github')
  @Render('callback')
  getCallback() {
    return { user: 'You are logged already' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/Form.html')
  @Render('Form')
  async form(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/gamenoot.html')
  @Render('gamenoot')
  async game(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/lk.html')
  @Render('lk')
  async lk(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/macbook.html')
  @Render('macbook')
  async mac(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/order.html')
  @Render('order')
  async order(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/motherboar.html')
  @Render('motherboar')
  async motherboard(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/myAccount.html')
  @Render('myAccount')
  async myAcc(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/orderDelivery.html')
  @Render('orderDelivery')
  async orderdelivery(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/orderShopkipper.html')
  @Render('orderShopkipper')
  async shopki(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/Proc.html')
  @Render('Proc')
  async proc(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/pusPhone.html')
  @Render('pusPhone')
  async pusphone(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/Shops.html')
  @Render('Shops')
  async shops(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/smartphfon.html')
  @Render('smartphfon')
  async smart(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/ultrabook.html')
  @Render('ultrabook')
  async ultra(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/VideoCard.html')
  @Render('VideoCard')
  async videocard(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }

  @UseGuards(optionalAuthGuard)
  @Get('/Product.html')
  @Render('Product')
  async product(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
}
