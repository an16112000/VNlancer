import NextAuth, { Account, Session, User } from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { JWT, getToken } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import CredentialsProvider from "next-auth/providers/credentials"




export default NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // Passwordless / email sign in
  ],
  callbacks: {
    async session({ session, token }) {
      console.log('session: ', session.user)
      console.log('token', token)
      if (session.user) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;

      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        console.log('user: ', user)
        token.id = user.id;
      }
      if (account) {
        console.log('account: ', account)
        token.accessToken = account.access_token;
      }
      return token;
    },

  },

}
)


