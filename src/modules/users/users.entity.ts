import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: String;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: String;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: String;

    @Column({
        type: DataType.STRING,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: String;
}