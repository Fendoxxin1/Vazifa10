import db from "...db/index.js";

export class TalabalarController {
  async crateTalaba(req, res) {
    try {
      const { full_name, guruh_id } = req.body;
      const guruh = await db.query("SELECT id FROM guruhlar WHER id = $1", [
        guruh_id,
      ]);
      if (!guruh?.row[0]) {
        return res.status(404).json({
          error: `Guruh not found ${guruh_id}`,
        });
      }
      const result = await db.query(
        "INSERT INTO talabalar (full_name, guruh_id) VALUS ($1,$2) RETURNING *",
        [full_name, guruh_id]
      );
      return res.status(200).json({
        statusCode: 200,
        message: "succes",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getAllTalabalar(_, res) {
    try {
      const result = await db.query("SELECT * FROM talabalar");
      return res.status(200).json({
        statusCode: 200,
        message: "succes",
        data: result?.rows,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getTalabaById(req, res) {
    try {
      const result = await db.query("SELCT * FROM talabalar WHERE id = $1", [
        req,
        params.id,
      ]);
      if (!result?.rows[0]) {
        return res.status(404).json({
          error: "Talaba not found",
        });
      }
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async updateTalabaById(req, res) {
    try {
      const { full_name, guruh_id } = req.body;
      const guruh = await db.query("SELECT id FROM guruhlar WHER id = $1", [
        guruh_id,
      ]);
      if (!guruh?.row[0]) {
        return res.status(404).json({
          error: `Guruh not found ${guruh_id}`,
        });
      }
      const result = await db.query(
        "UPDATE talabalar SET full_name = $1, guruh_id = $2, WHERE  id  = $3 RETURNING *",
        [full_name, guruh_id, req.params.id]
      );
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async deleteTalabaById(req, res) {
    try {
      const result = await db.query(
        "DELETE FROM talabalar WHERE id = $1 RETURNING *",
        [req.params.id]
      );
      if (!result.rows[0]) {
        return res.status(404).json({
          error: "Talaba not found",
        });
      }
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: {},
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
}
