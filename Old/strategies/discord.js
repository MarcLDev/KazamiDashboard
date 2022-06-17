const passport = require ('passport');
const DiscordStrategy = require ('passport-discord');
const User = require('../../database/schemas/User')

const clientSecret = process.env['DASHBOARD_CLIENT_SECRET']
const callbackUrl = process.env['DASHBOARD_CALLBACK_URL']

passport.serializeUser( ( user, done ) =>{
  done(null, user.discordId)
});

passport.deserializeUser( async ( discordId, done ) => {
  try{
    const user = await User.findOne( { discordId } );
    return user ? done( null, user ) : done( null, null );
  } catch ( err ){
    console.log(err);
    done( err, null );
  }
});

passport.use(
    new DiscordStrategy({
        clientID: '748183407238053998',
        clientSecret: clientSecret,
        callbackURL: callbackUrl,
        scope: ['identify', 'guilds'],
    }, async ( accessToken, refreshToken, profile, done ) => {
      const { id, username, discriminator, avatar, guilds } = profile;
      try{
        const findUser = await User.findOneAndUpdate( { discordId: id }, {
          discordTag: `${username}#${discriminator}`,
          avatar,
          guilds,
        }, { new: true });
        if(findUser) {
          return done( null, findUser )
        } else {
          const newUser = await User.create({
            discordId: id,
            discordTag: `${ username }#${ discriminator }`,
            avatar,
            guilds,
          } );
          return done(null, newUser);
        }
      }catch(err){
        console.log(err)
        return done(err, null)
      }
  })
);