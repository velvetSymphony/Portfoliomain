#!/usr/bin/env python3
import psycopg
import logging
import os

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def update_table(*, db_name, db_user, db_password, db_port, user_host):
    with psycopg.connect(
        dbname=db_name, user=db_user, host=user_host, port=db_port, password=db_password
    ) as conn:
        logging.info("Obtaining random trail record from database...")
        record = conn.execute("""SELECT * FROM treks ORDER BY RANDOM() LIMIT 1;""")
        tr_id = record.fetchone()[0]
        logging.info("Updating obtained random trail record's counter by 1...")
        update_command = f"UPDATE treks SET trail_counter = trail_counter + 1 WHERE trail_id = {tr_id}"
        conn.execute(update_command)


if __name__ == "__main__":
    db_name = os.environ.get('DB_NAME')
    db_user = os.environ.get('DB_USER')
    db_password = os.environ.get('DB_PASS')
    db_port = 5432
    user_host = os.environ.get('HOSTNAME')

    update_table(
        db_name=db_name,
        db_user=db_user,
        db_port=db_port,
        db_password=db_password,
        user_host=user_host,
    )
    logging.info('Succesfully updated the "random" record in the database :D')
