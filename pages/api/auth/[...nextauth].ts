import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { AxiosResponse } from 'axios'
import { AuthenticateResponseBody, authenticate } from '@/api/auth'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
  ],
  callbacks: {
    async session(params) {
      params.session.accessToken = params.token.accessToken as string
      return params.session;
    },
    async jwt(params) {
      if (params.trigger == "signIn") {
        console.log(params.user.image);
        const response: AxiosResponse<AuthenticateResponseBody> = await authenticate({ tokenId: params.account?.id_token, username: params.token.email as string, imageUrl: params.user.image });
        params.token.accessToken = response.data.accessToken;
        if (response.data.role == "ADMIN") {
          params.token.isAdmin = true;
        }
      }
      return params.token;
    }
  },
})
