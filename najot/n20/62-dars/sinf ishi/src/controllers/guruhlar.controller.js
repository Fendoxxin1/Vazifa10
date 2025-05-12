import db from "../db/index.js";

export class GuruhController {
  async createGuruh(req, res) {
    try {
      const { name } = req.body;
      const result = await db.query(
        "INSERT INTO guruhlar (name) VALUES ($1) RETURNING *",
        [name]
      );
      return res.status(201).json({
        statusCode: 201,
        message: "success",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getAllGuruhlar(req, res) {
    try {
      const groups = await db.query("SELECT * FROM guruhlar");
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: groups.rows,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getGuruhById(req, res) {
    try {
      const result = await db.query("SELECT * FROM guruhlar WHERE id = $1", [
        req.params.id,
      ]);
      if (!result.rows[0]) {
        return res.status(404).json({
          error: "Guruh not found",
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

  async updateGuruhById(req, res) {
    try {
      const result = await db.query(
        "UPDATE guruhlar SET name = $1 WHERE id = $2 RETURNING *",
        [req.body.name, req.params.id]
      );
      if (!result) {
        return res.status(400).json({
          error: "Error on updating guruh",
        });
      }
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

  async deleteGuruhById(req, res) {
    try {
      const result = await db.query(
        "DELETE FROM guruhlar WHERE id = $1 RETURNING *",
        [req.params.id]
      );
      if (!result.rows[0]) {
        return res.status(400).json({
          error: "Error on deleting guruh",
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
