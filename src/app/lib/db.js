const { username, password } = process.env;

export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.5wjgq.mongodb.net/restaurantDB?retryWrites=true&w=majority&appName=Cluster0`;
