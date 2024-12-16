"""add colaborator table

Revision ID: 9e0bb028bb85
Revises: cf8b2a32522c
Create Date: 2024-12-12 14:32:54.334512

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '9e0bb028bb85'
down_revision = 'cf8b2a32522c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('collaborator', 'status',
               existing_type=sa.VARCHAR(),
               type_=sa.Enum('PENDING', 'ACCEPT', 'REJECT', name='collaborationstatus'),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('collaborator', 'status',
               existing_type=sa.Enum('PENDING', 'ACCEPT', 'REJECT', name='collaborationstatus'),
               type_=sa.VARCHAR(),
               existing_nullable=False)
    # ### end Alembic commands ###