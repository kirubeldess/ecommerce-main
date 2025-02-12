import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null}
// also caches the connection to avoid reconnecting multiple times(for performance)

//Note: connectToDatabase is an asynchronous function that establishes a connection to a MongoDB database using Mongoose.
export const connectToDatabase = async (
    MONGODB_URI= process.env.MONGODB_URI
) => {
    if(cached.conn) return cached.conn  //Checks if a cached database connection already exists. If cached.conn is already connected, return it immediately to reuse the existing connection instead of creating a new one.
    if(!MONGODB_URI) throw new Error('MONGODB URI IS MISSING')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI)  //If cached.promise is already defined (i.e., a connection attempt is in progress), it reuses it.Otherwise, it initializes a new connection using mongoose.connec()

    cached.conn = await cached.promise    //Waits for the database connection to complete.Once the connection is established, it stores the connection object in cached.conn. This ensures that the next time connectToDatabase is called, the same connection instance is used instead of reconnecting.
    return cached.conn  //the function returns the established Mongoose connection.
}

