async function stats(request, response) {
const statsResponse = await fetch(`https://canary.discord.com/api/guilds/812146641380573205/widget.json`);
const statsResponseJson = statsResponse.json();
const Guilds = statsResponseJson.members[9].game.name.replace('on' , '').replace('servers' , '')
response.json({
    guilds: Guilds,
});
}
export default stats;
