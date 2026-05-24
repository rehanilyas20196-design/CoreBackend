import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: { email: string; password: string; full_name?: string; joiningDate?: string }) {
    return this.authService.signUp(body.email, body.password, {
      full_name: body.full_name,
      joiningDate: body.joiningDate,
    });
  }

  @Post('login')
  async signIn(@Body() body: { email: string; password: string }) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('logout')
  async signOut() {
    return this.authService.signOut('');
  }

  @Get('session')
  async getSession() {
    return this.authService.getSession();
  }

  @Post('google')
  async signInWithGoogle() {
    return this.authService.signInWithGoogle();
  }
}
