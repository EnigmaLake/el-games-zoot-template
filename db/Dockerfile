FROM sqitch/sqitch

COPY ./src ./src
COPY ./sqitch.conf ./
COPY ./sqitch.plan ./

ENTRYPOINT sqitch plan && sqitch deploy
