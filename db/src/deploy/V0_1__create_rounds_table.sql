CREATE SCHEMA el_games_zoot_template;

CREATE TABLE el_games_zoot_template.rounds (
  id BIGSERIAL PRIMARY KEY,
);

CREATE UNIQUE INDEX rounds_game_round_id_user_id_idx ON el_games_zoot_template.rounds(game_round_uuid, user_id);
