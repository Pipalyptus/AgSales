create table Grower (
	id integer primary key auto_increment,
    name varchar(50),
    businessType varchar(40),
    licenseNumber integer,
    email varchar(40),
    password varchar(100),
    phoneNumber varchar(30),
    description text,
    imageURL varchar(300)
);

create table Distributor (
	id integer primary key auto_increment,
    name varchar(50),
    businessType varchar(40),
    licenseNumber integer,
    email varchar(40),
    password varchar(100),
    phoneNumber varchar(30),
    description text,
    imageURL varchar(300)
);

create table Product (
	id integer primary key auto_increment,
    growerId integer,
    name varchar(30),
    price double,
	quantity integer,
    description text,
    imageURL varchar(300),
    foreign key (growerId) references Grower (id)
);

create table Tag (
	id integer primary key auto_increment,
    value varChar(30)
);

create table ProductReview (
	id integer primary key auto_increment,
    productId integer,
    reviewerId integer,
    rating integer,
    description text,
    foreign key (productId) references Product (id),
    foreign key (reviewerId) references Distributor (id)
);

create table TagOwnership (
	tagId integer,
    productId integer,
    primary key(tagId, productId),
    foreign key (tagId) references Tag (id),
    foreign key (productId) references Product (id)
);