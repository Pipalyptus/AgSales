create table Grower (
	id integer primary key,
    name varchar(50),
    businessType varchar(40),
    licenseNumber integer,
    email varchar(40),
    password varchar(100),
    phoneNumber varchar(20),
    description text,
    imageURL varchar(300)
);

create table Distributor (
	id integer primary key,
    name varchar(50),
    businessType varchar(40),
    licenseNumber integer,
    email varchar(40),
    password varchar(100),
    phoneNumber varchar(20),
    description text,
    imageURL varchar(300)
);

create table Product (
	id integer primary key,
    growerId integer,
    name varchar(30),
    price double,
	quantity integer,
    description text,
    imageURL varchar(300),
    foreign key (growerId) references Grower (id)
);

create table Tag (
	id integer primary key,
    productId integer,
    value varChar(30),
    foreign key (productId) references Product (id)
);

create table ProductReview (
	id integer primary key,
    productId integer,
    reviewerId integer,
    rating integer,
    description text,
    foreign key (productId) references Product (id),
    foreign key (reviewerId) references Distributor (id)
);
