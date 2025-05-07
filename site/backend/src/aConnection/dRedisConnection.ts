import Redis from 'ioredis'

// Redis connection made through internsdaemon@gmail.com
const redisClient = new Redis(process.env.ENVIRONMENT === "Production" ? (
  {
    // host: 'redis-12985.c81.us-east-1-2.ec2.redns.redis-cloud.com',
    host: 'redis-14779.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
    // port: 12985,
    port: 14779,
    // password: 'nI7vpS63deSOiATOp5X3lZ6S8O79XUfq'
    password: 'MwCGuP74Ud5t1HxXU7e3cDAwY8cDH2BN'
  }
) : (
  {
    host: 'redis-14779.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 14779,
    password: 'MwCGuP74Ud5t1HxXU7e3cDAwY8cDH2BN'
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
