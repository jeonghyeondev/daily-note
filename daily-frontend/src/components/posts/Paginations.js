import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import qs from 'qs';

const useStyles = makeStyles((theme) => ({
  pageNum: {
    lineHeight: 2,
  },
}));

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const PageNumber = styled.div``;

const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const Paginations = ({ page, lastPage, username, tag }) => {
  const classes = useStyles();

  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        variant="contained"
        type="submit"
        color="secondary"
        href={
          page === 1 ? undefined : buildLink({ username, tag, page: page - 1 })
        }
      >
        이전
      </Button>
      <PageNumber>
        <Typography className={classes.pageNum}>{page}</Typography>
      </PageNumber>
      <Button
        disabled={page === lastPage}
        variant="contained"
        type="submit"
        color="secondary"
        href={
          page === lastPage
            ? undefined
            : buildLink({ username, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Paginations;
