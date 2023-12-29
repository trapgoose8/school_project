import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connect from "../../../../utils/db";
import User from "../../../../models/User";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                fullfind: {label: "Fullfind", type: "text"},
                password: {label: "Password", type: "password"},
            },

            async authorize(credentials) {
                
                await connect();

                if (!credentials) {
                    throw new Error("Данные не найдены");
                }

                try {
                    
                    const user = await User.findOne({fullfind: credentials.fullfind});
                    
                    if (user) {
                        if (credentials.password === user.password) {
                            return user;
                        }
                        else {
                            throw new Error("Пароль неверный");
                        }
                    } else {
                        throw new Error("Ошибка при вводе данных")
                    }
                } catch (error) {
                    throw new Error("Ошибка при вводе данных")
                }
            }

        })
    ],

    
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}) {
            return token;
        },
        async session({session, token, user}) {
            await connect();

            const userDB = await User.findOne({_id: token.sub});
            session.user = userDB;

            return session;
        },
    },
});

export {handler as GET, handler as POST}