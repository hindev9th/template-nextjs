import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    signIn: ({user}) => {
      // account?.provider
      user.id = '111111112'
      user.accessToken = '1111111121a'
      user.refreshToken = 'refreshTokenabc11'
      return true
    },
    jwt: ({user, token, trigger, session}) => {
      // if (trigger === "update") {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        console.log(session, trigger);
        // user.accessToken = session.accessToken
      // }
      return {...token, ...user};
    },
    session: ({session, token, trigger, newSession}) => {
      // if (trigger == 'update'){

      // }
      return {
        ...session,
        user: {
          sub: token.sub,
          name: token.name,
          email: token.email,
          image: typeof token.image === 'string' ? token.image : '',
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
        expires: session.expires,
      }
    }
  }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}