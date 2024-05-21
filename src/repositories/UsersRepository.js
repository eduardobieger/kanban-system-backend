const UsersRepository = {
  async createUser(fastify, email, username, password) {
    try {
      fastify.pg.query(
        "INSERT INTO users (email, username, user_password, role_id) VALUES ($1, $2, $3, (SELECT id FROM roles WHERE role_name = $4))",
        [email, username, password, "user"]
      );
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllUsers(fastify) {
    try {
      const { rows } = await fastify.pg.query(
        "SELECT email, username FROM users"
      );

      return rows;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async updateUsername(fastify, username, email) {
    try {
      fastify.pg.query("UPDATE users SET username = $1 WHERE email = $2", [
        username,
        email,
      ]);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default UsersRepository;
