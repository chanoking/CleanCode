class Database {
  private client: any;
  get connectedClient() {
    if (!this.client) {
      throw new Error("Databse not connected!");
    }
    return this.client;
  }

  connect() {
    // Establishing connection ...
    this.client = {};
  }
}

const db = new Database();
db.connect();
