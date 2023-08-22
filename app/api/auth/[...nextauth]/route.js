import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    pages: {
        signIn: '/auth/login',

    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            async authorize(credentials, req){

                return null
            },
        }),

    ],

}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}