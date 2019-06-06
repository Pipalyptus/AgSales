# add a review
insert into ProductReview (productId, reviewerId, rating, content) values (<productId>, <reviewerId>, <rating>, <description>);

# select a profile
select * from Distributor d where d.id = <distributorId>;

# create a product
insert into Product (growerId, name, price, quantity, description, imageURL) values (<growerId>, <productName, <price>, <quantity, <description>, <imageURL>);

# create a new tag
insert into Tag (value) values ("asdf");

# get the id of a tag
select t.tagId from Tag t where t.value = <value>;

# add a tag to a product
insert into TagOwnership (tagId, productId) values (<tagId>, <productId>);