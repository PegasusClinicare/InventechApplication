import Redis from 'ioredis'

// Redis connection made through internsdaemon@gmail.com
const redisClient = new Redis(process.env.ENVIRONMENT === "Production" ? (
  {
    // host: 'redis-12985.c81.us-east-1-2.ec2.redns.redis-cloud.com',
    host: 'redis-12195.c283.us-east-1-4.ec2.redns.redis-cloud.com',
    // port: 12985,
    port: 12195,
    // password: 'nI7vpS63deSOiATOp5X3lZ6S8O79XUfq'
    password: 'N1WhxrAeA6F8hpZLgigrsL3QOIBuaNq1'
  }
) : (
  {
    host: 'redis-11154.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 11154,
    password: 'WmNrgEozIXQmLciZs8Uv1zZBeoB9R2l1'
  }
))

const redisConnection = (client: Redis = redisClient) => {
  client.on("error", (error) => {
    console.log('Redis Client Error', error)
  })


  client.on("connect", () => {
    console.log(`Great... Redis connected on server ${client.options.host}`)
  })
}

export default redisConnection;
export { redisClient }
